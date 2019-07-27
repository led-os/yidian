package com.linken.newssdk.core.detail.article.common;

import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.os.Build;
import android.text.TextUtils;
import android.util.Base64;
import android.view.View;

import com.linken.ad.data.AdvertisementCard;
import com.linken.newssdk.IntentConstants;
import com.linken.newssdk.R;
import com.linken.newssdk.base.activity.BaseActivity;
import com.linken.newssdk.core.newweb.LiteWebView;
import com.linken.newssdk.core.newweb.WebAppInterface;
import com.linken.newssdk.core.newweb.WebAppManager;
import com.linken.newssdk.data.card.base.Card;
import com.linken.newssdk.data.news.INewsType;
import com.linken.newssdk.utils.ContextUtils;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

import static com.linken.newssdk.data.news.INewsType.NORMAL_NEWS_URL;

/**
 * @author zhangzhun
 * @date 2018/5/19
 */

public abstract class CommonNewsActivity<P extends CommonNewsPresenter> extends BaseActivity<P> implements CommonNewsContractView, WebAppInterface.WebViewHost {

    protected LiteWebView mWebView;
    private String mUri;
    protected int mLocalJsNeedInsert = 0;   // 0: 不需要； 1： 加载针对thirdparty部分的。
    protected Card mCard;
    protected boolean isFromList = false;
    protected int articleType = INewsType.STYLE_HBRID_NEWS;
    protected String mNewsPara = INewsType.NORMAL_NEWS_URL;
    protected int mCurrentScreenMode = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT;

    @Override
    protected void initView() {
        mWebView = findViewById(R.id.web_container);
    }

    @Override
    protected void initData() {
        initWebView(this, mWebView);
        fetchData();
    }

    @Override
    protected void initParams() {
        mCard = (Card) getIntent().getSerializableExtra(IntentConstants.CARD);
        articleType = getIntent().getIntExtra(INewsType.NEWS_STYLE, INewsType.STYLE_HBRID_NEWS);
        mNewsPara = getIntent().getStringExtra(NORMAL_NEWS_URL);
        if (mCard != null) {
            isFromList = true;
        } else {
            isFromList = false;
        }
        handleStyleAndUrl();
        mUri = generateUri();
    }

    private void handleStyleAndUrl() {
        if (isFromList) {
            try {
                handleNewsPara();
                URL url = new URL(mCard.url);
                String host = url.getHost();
                if (WebAppManager.getInstance().getThirdPartyManager().isInternalSite(host)) {
                    switch (mCard.cType) {
                        case Card.CTYPE_NORMAL_NEWS:
                        case Card.CTYPE_ADVERTISEMENT:
                            articleType = INewsType.STYLE_HBRID_NEWS;
                            break;
                        case Card.CTYPE_VIDEO_CARD:
                            articleType = INewsType.STYLE_HBRID_VIDEO;
                            break;
                        case Card.CTYPE_PICTURE_GALLERY:
                            articleType = INewsType.STYLE_HBRID_GALLERY;
                            break;
                        default:
                            break;
                    }
                } else {
                    articleType = INewsType.STYLE_THIRD_PARTY;
                }
                handleAdCard();
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        }
    }

    private void handleAdCard() {
        if (mCard != null && mCard instanceof  AdvertisementCard && !TextUtils.isEmpty(((AdvertisementCard) mCard).getDocId())) {
            articleType = INewsType.STYLE_HBRID_NEWS;
        }
    }

    private void handleNewsPara() {
        if (mCard instanceof AdvertisementCard) {
            mNewsPara = "docid=" + ((AdvertisementCard) mCard).getDocId();
        } else {
            mNewsPara = getNewsPara(mCard.id, mCard.url);
        }
    }

    public void fetchData() {
        if (mWebView != null && !TextUtils.isEmpty(mUri)) {
            mWebView.loadUrl(mUri);
        }
    }

    protected String generateUri() {
        String url = null;
        switch (articleType) {
            case INewsType.STYLE_HBRID_NEWS:
            case INewsType.STYLE_HBRID_VIDEO:
                url = "file:///android_asset/www/html/main/article.html?" + mNewsPara;
                break;
            case INewsType.STYLE_HBRID_GALLERY:
                url = "file:///android_asset/www/html/main/article.html?" + mNewsPara + "&gallery=true";
                break;
            case INewsType.STYLE_NEWS_COMMENTS:
                url = "file:///android_asset/www/html/main/comment.html?" + mNewsPara;
                break;
            case INewsType.STYLE_THIRD_PARTY:
                url = mNewsPara;
                mLocalJsNeedInsert = 1;   //"file:///android_asset/www/build/thirdparty.js";
                break;
            case INewsType.STYLE_NEWS_EXTERNAL:
                url = mNewsPara;
                break;
            default:
                break;
        }
        return url;
    }

    private void initWebView(Activity context, LiteWebView webview) {
        if (context == null || webview == null ) {
            return;
        }
        Map<String, String> jsStringMap = new HashMap<>(2);
        String localJsToBeInjected = null;
        InputStream input;
        try {
            // www/js/common/hammer.min.js
            input = ContextUtils.getApplicationContext().getAssets().open("www/js/common/hammer.min.js");
            byte[] buffer = new byte[input.available()];
            input.read(buffer);
            input.close();

            // String-ify the script byte-array using BASE64 encoding !!!
            String encoded = Base64.encodeToString(buffer, Base64.DEFAULT);
            localJsToBeInjected = encoded;
        } catch (IOException e) {
            e.printStackTrace();
            localJsToBeInjected = null;
        }
        jsStringMap.put(LiteWebView.JS_HAMMER, localJsToBeInjected);  // 这个要第一个。

        if (mLocalJsNeedInsert == 1) {
            try {
                input = ContextUtils.getApplicationContext().getAssets().open("www/build/thirdparty.js");
                byte[] buffer = new byte[input.available()];
                input.read(buffer);
                input.close();

                // String-ify the script byte-array using BASE64 encoding !!!
                String encoded = Base64.encodeToString(buffer, Base64.DEFAULT);
                localJsToBeInjected = encoded;
            } catch (IOException e) {
                e.printStackTrace();
                localJsToBeInjected = null;
            }
            jsStringMap.put(LiteWebView.JS_THIRDPARTY, localJsToBeInjected);  // 这个是第二个。
        }

        webview.init(jsStringMap, true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
            mWebView.getSettings().setMediaPlaybackRequiresUserGesture(false);
        }
        if (!isForExternalPage()) {
            webview.addJavascriptInterface(
                    new WebAppInterface(context, webview, this), "container");
        } else {
            // 告诉Webview，它处于外部网页中，必要的话去拦截一些不必要的url。
            webview.setInExternalPageEnvironment(true);
        }

        if (!allowContextMenu()) {
            webview.setLongClickable(false);
            webview.setOnLongClickListener(new View.OnLongClickListener() {
                @Override
                public boolean onLongClick(View v) {
                    return true;
                }
            });
        }
    }

    protected boolean isForExternalPage() {
        // 缺省认为不是。
        return false;
    }

    protected boolean allowContextMenu() {
        return true;
    }

    @Override
    public void onResume() {
        super.onResume();
        if (mWebView != null) {
            mWebView.onResume();
            mWebView.notifyJsAtKeyPoint(LiteWebView.WV_RESUME);
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        if (mWebView != null) {
            mWebView.onPause();
            mWebView.notifyJsAtKeyPoint(LiteWebView.WV_PAUSE);
        }
    }

    @Override
    public void onDestroy() {
        if (mWebView != null) {
            mWebView.notifyJsAtKeyPoint(LiteWebView.WV_DESTROY);
            mWebView.destroy();
            mWebView = null;
        }
        super.onDestroy();
    }


    public void changeOrientation(boolean usingPortrait) {
        if (usingPortrait) {
            mCurrentScreenMode = ActivityInfo.SCREEN_ORIENTATION_PORTRAIT;
        } else {
            mCurrentScreenMode = ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE;
        }
        setRequestedOrientation(
                usingPortrait? ActivityInfo.SCREEN_ORIENTATION_PORTRAIT : ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
    }

    @Override
    public void triggerUpdate() {

    }

    @Override
    public String getHistory() {
        return null;
    }

    public String getNewsPara(String docId, String originUrl) {
        if (WebAppManager.getInstance().getThirdPartyManager().isInternalSite(originUrl)) {
            String result = "docid=" + docId;
            try {
                URL url = new URL(originUrl);
                if (!TextUtils.isEmpty(url.getQuery())) {
                    result += "&" + url.getQuery();
                }
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
            return result;
        } else {
            return originUrl;
        }

    }

    @Override
    public void closeMe() {
       finish();
    }

    @Override
    public void jumpToGroup(String groupId) {

    }

    @Override
    public void webViewScroll(int pos, int direction) {

    }

    @Override
    public void showAnimation(boolean isOn) {

    }

    @Override
    public void onShowError() {

    }

    @Override
    public void onHideError() {

    }

    @Override
    public void onShowLoading() {

    }

    @Override
    public void onHideLoading() {

    }

    @Override
    public void onShowEmpty() {

    }

    @Override
    public void onHideEmpty() {

    }
}
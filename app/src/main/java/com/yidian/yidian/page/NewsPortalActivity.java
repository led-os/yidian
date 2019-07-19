package com.yidian.yidian.page;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.widget.Button;

import com.umeng.analytics.MobclickAgent;
import com.yidian.newssdk.exportui.NewsPortalFragment;
import com.yidian.yidian.R;

/**
 * Created by chenyichang on 2018/5/22.
 *
 * 多tab接入
 */

public class NewsPortalActivity extends FragmentActivity {

    private Fragment fragmentNavi;
    private Button btnRefresh;
    private Button btnScroll2Top;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_portal);
        fragmentNavi = new NewsPortalFragment();
        getSupportFragmentManager().beginTransaction()
                .replace(R.id.portal_container, fragmentNavi)
                .commitNowAllowingStateLoss();

        btnRefresh = findViewById(R.id.expose_refresh);
        btnRefresh.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ((NewsPortalFragment)fragmentNavi).refreshCurrentChannel();
            }
        });
        btnScroll2Top = findViewById(R.id.expose_scroll2top);
        btnScroll2Top.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                ((NewsPortalFragment)fragmentNavi).scrollToTopPosition();
            }
        });
    }

    @Override
    protected void onResume() {
        super.onResume();
        MobclickAgent.onResume(this);
    }

    @Override
    protected void onPause() {
        super.onPause();
        MobclickAgent.onPause(this);
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
    }
}

package com.linken.newssdk.exportui;

import com.linken.newssdk.core.feeds.FeedFragment;
import com.linken.newssdk.protocol.newNetwork.business.helper.Get3rdInfoHelper;

/**
 * Created by chenyichang on 2018/5/18.
 */

//多tab 的輸出fragment
public class NewsPortalFragment extends FeedFragment {

    @Override
    public void refreshCurrentChannel() {
        super.refreshCurrentChannel();
    }

    @Override
    public void scrollToTopPosition() {
        super.scrollToTopPosition();
    }

    @Override
    public boolean isScrollToTopPosition() {
        return super.isScrollToTopPosition();
    }



    @Override
    public void onResume() {
        super.onResume();
        Get3rdInfoHelper.onFragmentOnResume();

    }
}

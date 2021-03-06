package com.linken.newssdk.core.ad;

import android.view.View;

import com.linken.ad.data.AdvertisementCard;


/**
 * Created by liuyue on 2017/6/5.
 */

public interface IAdFeedList {

    boolean shouldLoadAdConent();

    void removeAd(View view, AdvertisementCard card);

    void exposeAdInputBox(int distance, long duration);

    boolean allowBadFeedback();
}

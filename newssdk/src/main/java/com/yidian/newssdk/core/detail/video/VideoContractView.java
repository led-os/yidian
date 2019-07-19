package com.yidian.newssdk.core.detail.video;

import android.view.View;

import com.yidian.newssdk.base.constract.BaseContractView;
import com.yidian.newssdk.data.card.base.Card;

import java.util.List;

/**
 * Created by chenyichang on 2018/6/2.
 */

public interface VideoContractView extends BaseContractView {

    void onLoadData(List<Card> news);

    void onShareClick(Card newsInfo);

    void onMoreFuncClick(Card newsInfo);

    void hideNextVideo();

    void nextVideo(View view);

    void clickView(View view);
}

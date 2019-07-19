package com.yidian.newssdk.core.clean.feeds.data.bean;

import com.yidian.newssdk.core.clean.commmon.bean.UseCaseParams;
import com.yidian.newssdk.data.card.base.Card;

import java.util.List;

/**
 * @author zhangzhun
 * @date 2018/9/15
 */

public class FeedsResponse implements UseCaseParams.Response{
    private List<Card> mCard;

    public FeedsResponse(List<Card> mCard) {
        this.mCard = mCard;
    }

    public List<Card> getResult() {
        return mCard;
    }
}

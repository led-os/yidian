package com.linken.newssdk.core.detail.article.common;

import com.linken.newssdk.base.constract.BasePresenter;

/**
 * @author zhangzhun
 * @date 2018/5/19
 */

public class CommonNewsPresenter<V extends CommonNewsContractView> extends BasePresenter<V> {


    public CommonNewsPresenter(V mContactView) {
        super(mContactView);
    }
}

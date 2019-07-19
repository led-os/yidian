package com.yidian.newssdk.protocol.newNetwork.business.request.imp;

import com.yidian.newssdk.NewsFeedsSDK;
import com.yidian.newssdk.SDKContants;
import com.yidian.newssdk.protocol.newNetwork.business.request.RequestBase;
import com.yidian.newssdk.utils.ContextUtils;
import com.yidian.newssdk.utils.NetUtil;

/**
 * @author zhangzhun
 * @date 2018/7/23
 */

public class RequestWebGet extends RequestBase {

    private String mOriginRequest;

    public RequestWebGet(String originRequest) {
        this.mOriginRequest = originRequest;
    }

    @Override
    protected String getPath() {
        return null;
    }

    @Override
    public String getURI() {
        StringBuilder builder = new StringBuilder(mOriginRequest);
        long timestamp = System.currentTimeMillis() / 1000;
        if (mOriginRequest.lastIndexOf("?") != -1) {
            builder.append("&appid=" + NewsFeedsSDK.getInstance().getAppId());
        } else {
            builder.append("?appid=" + NewsFeedsSDK.getInstance().getAppId());
        }
        builder.append("&version=" + SDKContants.API_VER);
        builder.append("&net=" + NetUtil.getNetTypeString(ContextUtils.getApplicationContext()));
        builder.append("&platform=1");
        builder.append("&cv=" + SDKContants.SDK_VER);
        return builder.toString();
    }
}

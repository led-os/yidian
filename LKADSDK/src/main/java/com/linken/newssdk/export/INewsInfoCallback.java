package com.linken.newssdk.export;

import android.support.annotation.IntDef;
import android.support.annotation.StringDef;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.List;

public interface INewsInfoCallback {
    //文章
    String TYPE_ARTICLE = "Article";
    //广告
    String TYPE_AD = "Ad";
    //视屏
    String TYPE_VIDEO = "Video";

    int TYPE_EVENT_CLICK = 0;
    //关闭
    int TYPE_EVENT_DURATION = 1;
    //h5 倒计时
    int TYPE_EVENT_H5_COUNT_DOWN = 2;


    List<AfferentInfo> setAfferentInfo(List<AfferentInfo> afferentInfos, final INewRewardCallback rewardCallback);

    /**
     * @param id             新闻 广告 id
     * @param title          新闻 广告 标题
     * @param type           新闻广告类型 type{article,Ad,Video}
     * @param expectDuration 期望时间 秒
     * @param realDuration   真实的观看的时间 秒
     */
    void callback(int event, String id, String title, String type, String channel, int expectDuration, int realDuration, final INewRewardCallback rewardCallback);

    //Retention 是元注解，简单地讲就是系统提供的，用于定义注解的“注解”
    @Retention(RetentionPolicy.SOURCE)
    @IntDef({TYPE_EVENT_CLICK, TYPE_EVENT_DURATION, TYPE_EVENT_H5_COUNT_DOWN})
    @interface EventTypeDef {
    }

    //Retention 是元注解，简单地讲就是系统提供的，用于定义注解的“注解”
    @Retention(RetentionPolicy.SOURCE)
    @StringDef({TYPE_ARTICLE, TYPE_AD, TYPE_VIDEO})
    @interface NewsTypeDef {
    }

    class AfferentInfo {
        int countDown;
        @NewsTypeDef
        String type;

        public AfferentInfo(String type, int countDown) {
            this.countDown = countDown;
            this.type = type;
        }


        public int getCountDown() {
            return countDown;
        }

        public void setCountDown(int countDown) {
            this.countDown = countDown;
        }

        public String getType() {
            return type;
        }

        public void setType(@NewsTypeDef String type) {
            this.type = type;
        }
    }
}

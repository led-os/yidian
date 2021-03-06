package com.linken.ad.data;

import java.util.Map;

import org.greenrobot.greendao.AbstractDao;
import org.greenrobot.greendao.AbstractDaoSession;
import org.greenrobot.greendao.database.Database;
import org.greenrobot.greendao.identityscope.IdentityScopeType;
import org.greenrobot.greendao.internal.DaoConfig;

import com.linken.ad.data.AdvertisementCard;
import com.linken.ad.data.RewardCard;
import com.linken.ad.data.AdDownloadFile;

import com.linken.ad.data.AdvertisementCardDao;
import com.linken.ad.data.RewardCardDao;
import com.linken.ad.data.AdDownloadFileDao;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.

/**
 * {@inheritDoc}
 * 
 * @see org.greenrobot.greendao.AbstractDaoSession
 */
public class DaoSession extends AbstractDaoSession {

    private final DaoConfig advertisementCardDaoConfig;
    private final DaoConfig rewardCardDaoConfig;
    private final DaoConfig adDownloadFileDaoConfig;

    private final AdvertisementCardDao advertisementCardDao;
    private final RewardCardDao rewardCardDao;
    private final AdDownloadFileDao adDownloadFileDao;

    public DaoSession(Database db, IdentityScopeType type, Map<Class<? extends AbstractDao<?, ?>>, DaoConfig>
            daoConfigMap) {
        super(db);

        advertisementCardDaoConfig = daoConfigMap.get(AdvertisementCardDao.class).clone();
        advertisementCardDaoConfig.initIdentityScope(type);

        rewardCardDaoConfig = daoConfigMap.get(RewardCardDao.class).clone();
        rewardCardDaoConfig.initIdentityScope(type);

        adDownloadFileDaoConfig = daoConfigMap.get(AdDownloadFileDao.class).clone();
        adDownloadFileDaoConfig.initIdentityScope(type);

        advertisementCardDao = new AdvertisementCardDao(advertisementCardDaoConfig, this);
        rewardCardDao = new RewardCardDao(rewardCardDaoConfig, this);
        adDownloadFileDao = new AdDownloadFileDao(adDownloadFileDaoConfig, this);

        registerDao(AdvertisementCard.class, advertisementCardDao);
        registerDao(RewardCard.class, rewardCardDao);
        registerDao(AdDownloadFile.class, adDownloadFileDao);
    }
    
    public void clear() {
        advertisementCardDaoConfig.clearIdentityScope();
        rewardCardDaoConfig.clearIdentityScope();
        adDownloadFileDaoConfig.clearIdentityScope();
    }

    public AdvertisementCardDao getAdvertisementCardDao() {
        return advertisementCardDao;
    }

    public RewardCardDao getRewardCardDao() {
        return rewardCardDao;
    }

    public AdDownloadFileDao getAdDownloadFileDao() {
        return adDownloadFileDao;
    }

}

package com.yidian.ad.data;

import java.util.Map;

import org.greenrobot.greendao.AbstractDao;
import org.greenrobot.greendao.AbstractDaoSession;
import org.greenrobot.greendao.database.Database;
import org.greenrobot.greendao.identityscope.IdentityScopeType;
import org.greenrobot.greendao.internal.DaoConfig;

import com.yidian.ad.data.AdvertisementCard;
import com.yidian.ad.data.AdDownloadFile;

import com.yidian.ad.data.AdvertisementCardDao;
import com.yidian.ad.data.AdDownloadFileDao;

// THIS CODE IS GENERATED BY greenDAO, DO NOT EDIT.

/**
 * {@inheritDoc}
 * 
 * @see org.greenrobot.greendao.AbstractDaoSession
 */
public class DaoSession extends AbstractDaoSession {

    private final DaoConfig advertisementCardDaoConfig;
    private final DaoConfig adDownloadFileDaoConfig;

    private final AdvertisementCardDao advertisementCardDao;
    private final AdDownloadFileDao adDownloadFileDao;

    public DaoSession(Database db, IdentityScopeType type, Map<Class<? extends AbstractDao<?, ?>>, DaoConfig>
            daoConfigMap) {
        super(db);

        advertisementCardDaoConfig = daoConfigMap.get(AdvertisementCardDao.class).clone();
        advertisementCardDaoConfig.initIdentityScope(type);

        adDownloadFileDaoConfig = daoConfigMap.get(AdDownloadFileDao.class).clone();
        adDownloadFileDaoConfig.initIdentityScope(type);

        advertisementCardDao = new AdvertisementCardDao(advertisementCardDaoConfig, this);
        adDownloadFileDao = new AdDownloadFileDao(adDownloadFileDaoConfig, this);

        registerDao(AdvertisementCard.class, advertisementCardDao);
        registerDao(AdDownloadFile.class, adDownloadFileDao);
    }
    
    public void clear() {
        advertisementCardDaoConfig.clearIdentityScope();
        adDownloadFileDaoConfig.clearIdentityScope();
    }

    public AdvertisementCardDao getAdvertisementCardDao() {
        return advertisementCardDao;
    }

    public AdDownloadFileDao getAdDownloadFileDao() {
        return adDownloadFileDao;
    }

}

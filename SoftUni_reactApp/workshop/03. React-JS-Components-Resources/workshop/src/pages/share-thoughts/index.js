import React from 'react';
import PageWrapper from '../../components/pageLayout/index';
import Title from '../../components/title/title';
import style from '../../components/pageLayout/wrapper.module.css'

const ShareThoughts = () => {
    console.log(9999999999999)
    return (
        <PageWrapper>
                <div className={style.Posts}>
                    <Title title="share your thoughts..." />
                </div>
        </PageWrapper>
    )
}

export default ShareThoughts;
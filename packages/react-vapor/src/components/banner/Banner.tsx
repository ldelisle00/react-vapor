import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {Svg} from '../svg/Svg';
import {BannerContainer} from './BannerContainer';
import * as styles from './styles/Banner.scss';

export interface BannerProps {
    name: string;
    nameSubtitle?: string;
    messageTitle?: string;
    messageState?: string;
    alignCenter?: boolean;
    topRightInfos?: React.ReactNode;
    bottomRightInfos?: React.ReactNode;
}

export const BannerMessageStates = {
    Normal: 'normal',
    Warning: 'warning',
    Error: 'error',
};

export class Banner extends React.PureComponent<BannerProps> {
    static defaultProps: Partial<BannerProps> = {
        messageState: BannerMessageStates.Normal,
    };

    render(): JSX.Element {
        const mainClasses: string = classNames('banner-main', styles.bannerMain, {
            center: this.props.alignCenter,
        });
        const titleClasses: string = classNames('banner-title', styles.bannerTitle, {
            [`mod-warning ${styles.bannerWarningTitle}`]: this.props.messageState === BannerMessageStates.Warning,
            [`mod-error ${styles.bannerErrorTitle}`]: this.props.messageState === BannerMessageStates.Error,
        });
        return (
            <BannerContainer className="flex flex-column">
                <div className="flex space-between">
                    <div>
                        <h1 className={classNames('banner-name', styles.bannerName)}>{this.props.name}</h1>
                        {this.props.nameSubtitle && (
                            <h2 className={classNames('banner-subtitle', styles.bannerSubtitle)}>
                                {this.props.nameSubtitle}
                            </h2>
                        )}
                    </div>
                    {this.props.topRightInfos && (
                        <div className={classNames('banner-right', styles.bannerRight)}>{this.props.topRightInfos}</div>
                    )}
                </div>
                <div className={mainClasses}>
                    {this.props.messageTitle && (
                        <h3 className={titleClasses}>
                            {this.getTitleSvg()}
                            {this.props.messageTitle}
                        </h3>
                    )}
                    {this.props.children && (
                        <div className={classNames('banner-description', styles.bannerDescription)}>
                            {this.props.children}
                        </div>
                    )}
                </div>
                {this.props.bottomRightInfos && (
                    <div className={classNames(classNames('banner-right', styles.bannerRight), 'right-align')}>
                        <div className={styles.bannerBottomRightInfos}>{this.props.bottomRightInfos}</div>
                    </div>
                )}
            </BannerContainer>
        );
    }

    private getTitleSvg(): JSX.Element {
        if (_.contains([BannerMessageStates.Warning, BannerMessageStates.Error], this.props.messageState)) {
            return (
                <Svg
                    svgName="info"
                    svgClass="icon mx1"
                    className={classNames('banner-warning-icon', styles.bannerWarningIcon)}
                />
            );
        }
    }
}

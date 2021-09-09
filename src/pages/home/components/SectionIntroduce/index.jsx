import React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import ButtonPrimary from '../../../../components/ButtonPrimary';

function SectionIntroduce() {
    return (
        <div className="section-introduce-wrapper">
            <div className="section-introduce container">
                <Row>
                    <Col span={15} className="introduce">
                        <h2 className="title wow fadeInUp center" data-wow-delay="2s">HI THERE, I'M</h2>
                        <div className="content">
                            <div className="content__primary  wow fadeInUp center" data-wow-delay="2s">
                                Nguyen Vu <br />Khanh
                            </div>
                            <div className="content__sub  wow fadeInUp center" data-wow-delay="2s">
                                SOFTWARE ENGINEER (WEB DEVELOPER)
                            </div>
                            <div className="content__description  wow fadeInUp center" data-wow-delay="2s">
                                Experienced software engineer with a demonstrated history of working in the information technology and services industry
                            </div>
                        </div>
                        <div className="action wow rollIn center" data-wow-delay="2s">
                            <ButtonPrimary />
                        </div>
                    </Col>
                    <Col span={8} offset={1} className="image">
                    </Col>
                </Row>
            </div>

        </div>
    );
}

export default SectionIntroduce;
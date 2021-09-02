import React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import Psvg from '../../svg/Psvg';
import Osvg from '../../svg/Osvg';
import Rsvg from '../../svg/Rsvg';
import Tsvg from '../../svg/Tsvg';
import Fsvg from '../../svg/Fsvg';
import Lsvg from '../../svg/Lsvg';
import Isvg from '../../svg/Isvg';
import TextLink from '../TextLink';

function Header() {
    return (
        <div className="header container">
            <Row>
                <Col span={5} className="logo">
                    <Psvg className="ani" />
                    <Osvg className="ani ani--delay-1" />
                    <Rsvg className="ani ani--delay-2" />
                    <Tsvg className="ani ani--delay-3" />
                    <Fsvg className="ani ani--delay-4" />
                    <Osvg className="ani ani--delay-5" />
                    <Lsvg className="ani ani--delay-6" />
                    <Isvg className="ani ani--delay-7" />
                    <Osvg className="ani ani--delay-8" />
                </Col>
                <Col span={3} offset={16} className="content">
                    <TextLink text={"My Resume"} />
                </Col>
            </Row>

        </div>
    );
}

export default Header;
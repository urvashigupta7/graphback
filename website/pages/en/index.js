/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const { siteConfig } = this.props;
    const { baseUrl } = siteConfig;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small style={{fontSize:"xx-large"}}><b>{siteConfig.tagline}</b></small>
        <small><i className="fas fa-database"/> {siteConfig.firstfeature}<hr/></small>
        <small><i className="fas fa-rocket"/> {siteConfig.secondfeature}<hr/></small>
        <small><i className="fas fa-database"/> {siteConfig.thirdfeature}<hr/></small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <image className="graphback" src={`${baseUrl}img/graphback.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
        <PromoSection>
          <Button href="/docs/gettingstarted">View Docs </Button>
          <Button href={siteConfig.repoUrl}><i className="fab fa-github"/> Github</Button>
        </PromoSection>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const { config: siteConfig, language = '' } = this.props;
    const { baseUrl } = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Content = () => (
      <div className="mycontainer">
        <div align="center" className="supported">
          <h1>Supported Databases</h1>
          <figure>
            <image src={`${baseUrl}img/postgresql.png`} />
            <figcaption>PostgreSQL</figcaption>
          </figure>
          <figure>
            <image src={`${baseUrl}img/mongodb.png`} />
            <figcaption>MongoDB</figcaption>
          </figure>
        </div>
        <div className="initdemo">
          <image src={`${baseUrl}img/npxinit.png`} />
        </div>
      </div>
    );

    const Demo = () => (
      <Block align="center">
        {[
          {
            content: `<div class="yt-frame">
              <iframe frameBorder="0" width="560" height="310" scrolling="no" marginHeight="0" marginWidth="0" 
              src="https://www.youtube.com/embed/wmpEiffqxy8" 
              frameborder="0" allowfullscreen align="middle"></iframe>
            </div>`,
            title: 'Graphback in 10 minutes',
          },
        ]}
      </Block> 
    );

    const LearnHow = () => (
      <Block background="light" align="left">
        {[
          {
            content: `Graphback provides command line client for generating fully functional GraphQL enabled Node.js server and client side applications.
            Graphback will generate production-ready application based on your GraphQL types in seconds. `,
            image: `${baseUrl}img/diagramsmall.png`,
            contentAlign: 'right',
            imageAlign: 'right',
            title: 'Graphback Workflow',
          }
        ]}
      </Block>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Content/>
          <LearnHow />
          <Demo />
        </div>
      </div>
    );
  }
}

module.exports = Index;

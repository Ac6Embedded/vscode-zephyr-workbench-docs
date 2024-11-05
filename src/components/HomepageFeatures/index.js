import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/zephyr-workbench_logo.svg').default,
    to: '/docs/documentation/zephyr-workbench',
    description: (
      <>
        Find the complete user documentation that provides an in-depth look at every 
        features and capability of Zephyr Workbench.
      </>
    ),
  },
  {
    title: 'Zephyr Project',
    Svg: require('@site/static/img/zephyr_logo.svg').default,
    to: 'https://zephyrproject.org/',
    description: (
      <>
        The Zephyr Project is an open source Linux Foundation project. It provides 
        a best-in-class small, scalable, real-time operating system (RTOS) optimized 
        for resource-constrained devices, across multiple architectures.
      </>
    ),
  },
  {
    title: 'About Ac6',
    Svg: require('@site/static/img/ac6/logo_ac6.svg').default,
    to: 'https://www.ac6-training.com/cours.php?ref=oRT5',
    description: (
      <>
        Ac6 specializes in training for embedded real-time systems and Linux. 
        Ac6 also provides engineering, consulting and expertise. Among their 
        offerings is a comprehensive Zephyr training course that attracted hundreds 
        of engineers. 
      </>
    ),
  },
];

function Feature({Svg, title, to, description}) {
  return (
    <div className={clsx('col col--4')}>
      <a href={to}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" preserveAspectRatio="xMidYMid meet"/>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Switch,
  Button,
  Input,
  Field,
  Dropdown,
  Option,
  Slider,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  Card,
  CardHeader,
  CardPreview,
  Avatar,
  Badge,
  Text,
  Title2,
  Title3,
  Body1,
  Caption1,
  Divider,
  tokens,
  makeStyles,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    padding: '32px',
    borderRadius: '8px',
    minHeight: '600px',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '16px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  toggleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  hero: {
    paddingTop: '24px',
    paddingBottom: '24px',
  },
  section: {
    paddingTop: '24px',
    paddingBottom: '24px',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '16px',
  },
  card: {
    maxWidth: '360px',
  },
  cardPreview: {
    backgroundColor: tokens.colorBrandBackground2,
    padding: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: tokens.colorBrandForeground1,
  },
  messageStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  meta: {
    color: tokens.colorNeutralForeground3,
  },
});

function ShowcaseInner() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <Title2 as="h2" block>Fluent, without the Microsoft brand attached</Title2>
        <Body1 block style={{ marginTop: 8, color: tokens.colorNeutralForeground2 }}>
          The same theme toggle re-paints every component below. Tokens, contrast pairs,
          focus rings, and motion all come from <code>@fluentui/react-components</code>.
        </Body1>
      </div>

      <Divider />

      <section className={styles.section} aria-labelledby="buttons-heading">
        <Title3 as="h3" id="buttons-heading" block>Buttons</Title3>
        <Caption1 block className={styles.meta}>Five built-in appearances. Same API, distinct semantics.</Caption1>
        <div className={styles.row} style={{ marginTop: 12 }}>
          <Button appearance="primary">Primary</Button>
          <Button appearance="secondary">Secondary</Button>
          <Button appearance="outline">Outline</Button>
          <Button appearance="subtle">Subtle</Button>
          <Button appearance="transparent">Transparent</Button>
          <Button appearance="primary" disabled>Disabled</Button>
        </div>
      </section>

      <Divider />

      <section className={styles.section} aria-labelledby="forms-heading">
        <Title3 as="h3" id="forms-heading" block>Form fields</Title3>
        <Caption1 block className={styles.meta}>Labels, hints, and validation are first-class.</Caption1>
        <div className={styles.grid2} style={{ marginTop: 12 }}>
          <Field label="Email" hint="We'll never share it.">
            <Input type="email" placeholder="you@example.com" />
          </Field>
          <Field label="Role">
            <Dropdown placeholder="Pick one" defaultValue="Designer">
              <Option>Designer</Option>
              <Option>Engineer</Option>
              <Option>Researcher</Option>
              <Option>PM</Option>
            </Dropdown>
          </Field>
          <Field label="Confidence" hint="How sure are you?">
            <Slider defaultValue={60} min={0} max={100} />
          </Field>
          <Field label="Notifications">
            <Switch defaultChecked label="Email me when something changes" />
          </Field>
        </div>
      </section>

      <Divider />

      <section className={styles.section} aria-labelledby="feedback-heading">
        <Title3 as="h3" id="feedback-heading" block>Inline feedback</Title3>
        <Caption1 block className={styles.meta}>Intent-driven colors that meet WCAG AA against their background.</Caption1>
        <div className={styles.messageStack} style={{ marginTop: 12 }}>
          <MessageBar intent="info">
            <MessageBarBody>
              <MessageBarTitle>Heads up.</MessageBarTitle>
              {' '}This is what the info variant looks like in both themes.
            </MessageBarBody>
          </MessageBar>
          <MessageBar intent="success">
            <MessageBarBody>
              <MessageBarTitle>Saved.</MessageBarTitle>
              {' '}Your draft was published.
            </MessageBarBody>
          </MessageBar>
          <MessageBar intent="warning">
            <MessageBarBody>
              <MessageBarTitle>Almost there.</MessageBarTitle>
              {' '}Two required fields are still empty.
            </MessageBarBody>
          </MessageBar>
          <MessageBar intent="error">
            <MessageBarBody>
              <MessageBarTitle>Something broke.</MessageBarTitle>
              {' '}We couldn't reach the server. Try again.
            </MessageBarBody>
          </MessageBar>
        </div>
      </section>

      <Divider />

      <section className={styles.section} aria-labelledby="card-heading">
        <Title3 as="h3" id="card-heading" block>Composition</Title3>
        <Caption1 block className={styles.meta}>Cards, avatars, badges &mdash; assembled from primitives.</Caption1>
        <div style={{ marginTop: 12 }}>
          <Card className={styles.card}>
            <CardPreview className={styles.cardPreview}>
              <Text size={600} weight="semibold">Aa</Text>
            </CardPreview>
            <CardHeader
              image={<Avatar name="Sample Person" color="brand" />}
              header={<Text weight="semibold">Sample teammate</Text>}
              description={<Caption1 className={styles.meta}>Designer · Remote</Caption1>}
              action={<Badge appearance="filled" color="success">Active</Badge>}
            />
          </Card>
        </div>
      </section>
    </div>
  );
}

export default function FluentShowcase() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('fluent-demo-theme') : null;
    if (stored === 'dark') setIsDark(true);
    else if (stored === 'light') setIsDark(false);
    else if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('fluent-demo-theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  return (
    <FluentProvider theme={isDark ? webDarkTheme : webLightTheme}>
      <div style={{ padding: '16px 0' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '12px',
            padding: '8px 16px',
            backgroundColor: tokens.colorNeutralBackground2,
            borderRadius: '8px 8px 0 0',
            color: tokens.colorNeutralForeground1,
          }}
        >
          <Text size={200}>Light</Text>
          <Switch
            checked={isDark}
            onChange={(_, data) => setIsDark(!!data.checked)}
            aria-label="Toggle dark mode"
          />
          <Text size={200}>Dark</Text>
        </div>
        <ShowcaseInner />
      </div>
    </FluentProvider>
  );
}

import { NotificationOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  createStyles,
  Divider,
  Drawer,
  Group,
  Header,
  HoverCard,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
} from "@tabler/icons";
import { Link } from "react-router-dom";
const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];
function MyHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align='flex-start'>
        <ThemeIcon size={34} variant='default' radius='md'>
          <item.icon size={22} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size='sm' weight={500}>
            {item.title}
          </Text>
          <Text size='xs' color='dimmed'>
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  function handleNotification() {}
  function handleCart() {}
  return (
    <Box>
      <Header height={60} px='md'>
        <Group position='apart' sx={{ height: "100%" }}>
          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <Link to='/home' className={classes.link}>
              Home
            </Link>
            <HoverCard
              width={600}
              position='bottom'
              radius='md'
              shadow='md'
              withinPortal
            >
              <HoverCard.Dropdown sx={{ overflow: "hidden" }}>
                <Group position='apart' px='md'>
                  <Text weight={500}>Features</Text>
                  <Anchor href='#' size='xs'>
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my='sm'
                  mx='-md'
                  color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position='apart'>
                    <div>
                      <Text weight={500} size='sm'>
                        Get started
                      </Text>
                      <Text size='xs' color='dimmed'>
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant='default'>Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenMobile}>
            {/* <DarkMode></DarkMode> */}
            <Button variant='default'>
              <Link to='/order' className={classes.link}>
                My Order
              </Link>
            </Button>
            <Button variant='default'>
              <Link to='/cart' className={classes.link}>
                <ShoppingCartOutlined
                  style={{ fontSize: "20px", color: "#08c", cursor: "pointer" }}
                />
              </Link>
            </Button>
            <Button variant='default'>
              <Link to='/login' className={classes.link}>
                Login
              </Link>
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx='-md'>
          <Divider
            my='sm'
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <a href='#' className={classes.link}>
            Home
          </a>
          <UnstyledButton
            className={classes.link}
            onClick={toggleLinks}
          ></UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>

          <Group position='center' grow pb='xl' px='md'>
            <Button variant='default'>Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default MyHeader;

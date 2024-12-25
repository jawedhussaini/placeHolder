"use client";

import {
  Burger,
  Center,
  Drawer,
  Group,
  Menu,
  rem,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "./Header.module.css";
import Link from "next/link";

interface HeaderActionProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
}

export function Header({ links }: HeaderActionProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <Link
              href={link.link}
              className={classes.link}
             
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={rem(12)} stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link
        key={link.label}
        href={link.link}
        className={classes.link}
      
      >
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Group justify="space-between" w="100%" className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        <h2><span className={classes.logo}>POST.COM</span></h2>
        </Group>
        <Group gap="sm" className={classes.links}>
          {items}
        </Group>
        <Group></Group>
       

        <Drawer opened={opened} onClose={toggle} size="md" padding="xl">
          <Stack gap="md" pt="lg">
            {items}
          </Stack>
        </Drawer>
      </Group>
    </header>
  );
}

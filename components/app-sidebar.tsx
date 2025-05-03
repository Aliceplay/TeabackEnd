

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarHeader,
    SidebarProvider,
    useSidebar,
  } from "@/components/ui/sidebar"
  
  //Menu items
  const items=[
    {
        title:"辨識圖片匯入",
        url:"/input",
    }
  ]
  export function AppSidebar() {
  //   const {
  //     state,
  //     open,
  //     setOpen
  //   }=useSidebar()
    return (
      // <SidebarProvider open={open} onOpenChange={setOpen}>
      <Sidebar collapsible="icon" >
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup >
          <SidebarGroupLabel>功能列表</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      </Sidebar>
      // </SidebarProvider>
    )
  }
  
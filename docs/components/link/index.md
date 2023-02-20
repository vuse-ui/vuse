# Link

Text hyperlink

## Basic

:::preview Basic || Basic text link.
demo-preview=./basic.vue
:::

## Animate Hover

:::preview Animate Hover || When there is an underline, add the animateUnderline attribute to set the hover animation effect of the link (do not see the effect? Please zoom in and observe carefully).
demo-preview=./animateHover.vue
:::

<style lang='scss'>
.vp-doc a.v-link {
    font-weight: inherit;
    color: inherit;
    text-decoration-style: inherit;
    transition: inherit;
    transition-duration: 500ms;
    &:hover {
        color: rgb(84, 84, 84);
    }
}
</style>

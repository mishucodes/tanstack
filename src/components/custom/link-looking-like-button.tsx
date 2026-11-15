import type {FileRouteTypes} from "#/routeTree.gen";
import {Link} from "@tanstack/react-router";
import {buttonVariants} from "../ui/button";

export function LinkThatLooksLikeButton({link, text}: {link: FileRouteTypes["fullPaths"], text: string})
{
    return(
        <Link to={link} className={buttonVariants()}>{text}</Link>
    )
}
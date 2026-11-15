import {Link} from "@tanstack/react-router";
import {Button} from "../ui/button";
import type {FileRouteTypes} from "#/routeTree.gen";

export function LinkThatLooksLikeButton({link, text}: {link: FileRouteTypes["fullPaths"], text: string})
{
    return(
        <Button
            render={<Link to={link}>{text}</Link>}
        />
    )
}
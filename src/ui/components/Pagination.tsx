'use client'

import { Button, ButtonGroup } from "@chakra-ui/react";
import { usePagination } from "@/ui/hooks/usePagination";

export function Pagination() {
    const { handleClickBack, handleClickNext } = usePagination({totalElements: 10});

    return (
        <ButtonGroup>
            <Button onClick={handleClickBack}>
                Back
            </Button>
            <Button onClick={handleClickNext}>
                Next
            </Button>
        </ButtonGroup>
    )
}
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'

const style = {
    '& :hover': {
        color: 'white'
    }
}

export default function buttonGroup() {
    const router = useRouter();

    return (
        <div>
            <ButtonGroup aria-label="First group" size='sm'>
                <Button variant={router.pathname == "/study/1" ? 'danger' : 'dark'} href="/study/1">1</Button>
                <Button variant={router.pathname == "/study/2" ? 'danger' : 'dark'} href="/study/2">2</Button>
                <Button variant={router.pathname == "/study/3" ? 'danger' : 'dark'} href="/study/3">3</Button>
                <Button variant={router.pathname == "/study/4" ? 'danger' : 'dark'} href="/study/4">4</Button>
                <Button variant={router.pathname == "/study/5" ? 'danger' : 'dark'} href="/study/5">5</Button>
            </ButtonGroup>
        </div>
    );
}

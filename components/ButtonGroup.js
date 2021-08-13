import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button'


export default function buttonGroup() {
    const router = useRouter();

    return (
        <div>
            <ButtonGroup aria-label="First group">
                <Button variant={router.pathname == "/study/1" ? 'danger' : 'dark'}> <Link href="/study/1"><a>1</a></Link></Button>
                <Button variant={router.pathname == "/study/2" ? 'danger' : 'dark'}> <Link href="/study/2"><a>2</a></Link></Button>
                <Button variant={router.pathname == "/study/3" ? 'danger' : 'dark'}> <Link href="/study/3"><a>3</a></Link></Button>
                <Button variant={router.pathname == "/study/4" ? 'danger' : 'dark'}> <Link href="/study/4"><a>4</a></Link></Button>
                <Button variant={router.pathname == "/study/5" ? 'danger' : 'dark'}> <Link href="/study/5"><a>5</a></Link></Button>
            </ButtonGroup>
        </div>
    );
}

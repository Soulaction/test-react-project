import {describe, it} from '@jest/globals';
import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import {App} from "@/components/App";

describe('', () => {
    it('test app', async () => {
        render(<App/>);
        expect(screen.getByText('ADMIN')).toBeInTheDocument();
        const asyncText = await screen.findByText('isData');
        expect(asyncText).toBeInTheDocument();
    })

    it('test event app', async () => {
        render(<App/>);
        const btn = screen.getByTestId('togle-btn');
        const isText = screen.queryByTestId('togle-div');
        screen.debug()
        expect(isText).toBeNull();
        fireEvent.click(btn);
        screen.debug()
        expect(isText).toBeInTheDocument();
    })
})
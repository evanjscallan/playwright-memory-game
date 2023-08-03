import { type Locator, type Page} from '@playwright/test';
export class MainPage {
    readonly page: Page
    readonly tableBody: Locator;
    readonly playButton: Locator;
    constructor(page: Page) {
        this.page = page
        this.tableBody = page.locator('table#game_board tbody')
        this.playButton = page.locator('a:has-text("PLAY")').first()
    }
    async navToPage() {
        await this.page.goto('https://www.tucogames.com/memory-games/30-memory-for-adults-chairs.html')
        await this.playButton.click()
    }
    async cardSelector() {
        let firstCard;
        let lastCard;
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        for (let number = 1; number < 10; number++) {
            //cards below 10 have a 0 in the first digit place (e.g. 01, 02...)
            firstCard = await this.page.getByTestId(`carta0${number}`).first()
            lastCard = await this.page.getByTestId(`carta0${number}`).last()
            await firstCard.click()
            await delay(1000)
            await lastCard.click()
            await delay(1000)
        }
        for (let number = 10; number < 16; number++){
            const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
            firstCard = await this.page.getByTestId(`carta${number}`).first()
            lastCard = await this.page.getByTestId(`carta${number}`).last()
            await firstCard.click()
            await delay(1000)
            await lastCard. click()
            await delay(1000)
        }
        await delay(5000)
    }
}


//how to ass

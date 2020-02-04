export class UseCaseOutput {
    private readonly result: any;
    private readonly error: any;

    constructor(result: any, error: any) {
        this.result = result;
        this.error = error;
    }

    getResult(): any {
        return this.result;
    }

    isError(): boolean {
        return (this.error !== undefined);
    }
}

export interface UseCaseCallback {
    (output: UseCaseOutput): void;
}

export interface UseCaseInput {
    onResult: UseCaseCallback;
}

export interface UseCase {
    execute(): void
    onResult: UseCaseCallback;
}


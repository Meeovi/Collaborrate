"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksCreateInput_1 = require("../../../inputs/StocksCreateInput");
let CreateStocksArgs = class CreateStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksCreateInput_1.StocksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksCreateInput_1.StocksCreateInput)
], CreateStocksArgs.prototype, "data", void 0);
CreateStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateStocksArgs);
exports.CreateStocksArgs = CreateStocksArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksCreateInput_1 = require("../../../inputs/StocksCreateInput");
let CreateOneStocksArgs = class CreateOneStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksCreateInput_1.StocksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksCreateInput_1.StocksCreateInput)
], CreateOneStocksArgs.prototype, "data", void 0);
CreateOneStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneStocksArgs);
exports.CreateOneStocksArgs = CreateOneStocksArgs;

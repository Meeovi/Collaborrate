"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksCreateManyInput_1 = require("../../../inputs/StocksCreateManyInput");
let CreateManyStocksArgs = class CreateManyStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StocksCreateManyInput_1.StocksCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyStocksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyStocksArgs.prototype, "skipDuplicates", void 0);
CreateManyStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyStocksArgs);
exports.CreateManyStocksArgs = CreateManyStocksArgs;

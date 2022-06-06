"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksUpdateInput_1 = require("../../../inputs/StocksUpdateInput");
const StocksWhereUniqueInput_1 = require("../../../inputs/StocksWhereUniqueInput");
let UpdateStocksArgs = class UpdateStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksUpdateInput_1.StocksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksUpdateInput_1.StocksUpdateInput)
], UpdateStocksArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereUniqueInput_1.StocksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksWhereUniqueInput_1.StocksWhereUniqueInput)
], UpdateStocksArgs.prototype, "where", void 0);
UpdateStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateStocksArgs);
exports.UpdateStocksArgs = UpdateStocksArgs;

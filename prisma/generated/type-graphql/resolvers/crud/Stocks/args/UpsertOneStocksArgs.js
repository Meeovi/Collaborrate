"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksCreateInput_1 = require("../../../inputs/StocksCreateInput");
const StocksUpdateInput_1 = require("../../../inputs/StocksUpdateInput");
const StocksWhereUniqueInput_1 = require("../../../inputs/StocksWhereUniqueInput");
let UpsertOneStocksArgs = class UpsertOneStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereUniqueInput_1.StocksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksWhereUniqueInput_1.StocksWhereUniqueInput)
], UpsertOneStocksArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksCreateInput_1.StocksCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksCreateInput_1.StocksCreateInput)
], UpsertOneStocksArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksUpdateInput_1.StocksUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksUpdateInput_1.StocksUpdateInput)
], UpsertOneStocksArgs.prototype, "update", void 0);
UpsertOneStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneStocksArgs);
exports.UpsertOneStocksArgs = UpsertOneStocksArgs;

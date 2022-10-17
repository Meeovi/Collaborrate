"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksWhereUniqueInput_1 = require("../../../inputs/StocksWhereUniqueInput");
let DeleteOneStocksArgs = class DeleteOneStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereUniqueInput_1.StocksWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StocksWhereUniqueInput_1.StocksWhereUniqueInput)
], DeleteOneStocksArgs.prototype, "where", void 0);
DeleteOneStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneStocksArgs);
exports.DeleteOneStocksArgs = DeleteOneStocksArgs;

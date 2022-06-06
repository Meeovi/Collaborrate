"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStocksArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StocksWhereInput_1 = require("../../../inputs/StocksWhereInput");
let DeleteManyStocksArgs = class DeleteManyStocksArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StocksWhereInput_1.StocksWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StocksWhereInput_1.StocksWhereInput)
], DeleteManyStocksArgs.prototype, "where", void 0);
DeleteManyStocksArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStocksArgs);
exports.DeleteManyStocksArgs = DeleteManyStocksArgs;

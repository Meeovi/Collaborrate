"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let DeleteShopsArgs = class DeleteShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], DeleteShopsArgs.prototype, "where", void 0);
DeleteShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteShopsArgs);
exports.DeleteShopsArgs = DeleteShopsArgs;

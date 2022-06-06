"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsWhereInput_1 = require("../../../inputs/ShopsWhereInput");
let DeleteManyShopsArgs = class DeleteManyShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereInput_1.ShopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereInput_1.ShopsWhereInput)
], DeleteManyShopsArgs.prototype, "where", void 0);
DeleteManyShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyShopsArgs);
exports.DeleteManyShopsArgs = DeleteManyShopsArgs;

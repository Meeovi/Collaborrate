"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsUpdateManyMutationInput_1 = require("../../../inputs/ShopsUpdateManyMutationInput");
const ShopsWhereInput_1 = require("../../../inputs/ShopsWhereInput");
let UpdateManyShopsArgs = class UpdateManyShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsUpdateManyMutationInput_1.ShopsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsUpdateManyMutationInput_1.ShopsUpdateManyMutationInput)
], UpdateManyShopsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereInput_1.ShopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShopsWhereInput_1.ShopsWhereInput)
], UpdateManyShopsArgs.prototype, "where", void 0);
UpdateManyShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyShopsArgs);
exports.UpdateManyShopsArgs = UpdateManyShopsArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShopsUpdateInput_1 = require("../../../inputs/ShopsUpdateInput");
const ShopsWhereUniqueInput_1 = require("../../../inputs/ShopsWhereUniqueInput");
let UpdateShopsArgs = class UpdateShopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsUpdateInput_1.ShopsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsUpdateInput_1.ShopsUpdateInput)
], UpdateShopsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShopsWhereUniqueInput_1.ShopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ShopsWhereUniqueInput_1.ShopsWhereUniqueInput)
], UpdateShopsArgs.prototype, "where", void 0);
UpdateShopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateShopsArgs);
exports.UpdateShopsArgs = UpdateShopsArgs;

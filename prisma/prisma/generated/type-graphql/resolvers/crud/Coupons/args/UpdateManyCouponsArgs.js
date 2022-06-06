"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCouponsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CouponsUpdateManyMutationInput_1 = require("../../../inputs/CouponsUpdateManyMutationInput");
const CouponsWhereInput_1 = require("../../../inputs/CouponsWhereInput");
let UpdateManyCouponsArgs = class UpdateManyCouponsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsUpdateManyMutationInput_1.CouponsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CouponsUpdateManyMutationInput_1.CouponsUpdateManyMutationInput)
], UpdateManyCouponsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CouponsWhereInput_1.CouponsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CouponsWhereInput_1.CouponsWhereInput)
], UpdateManyCouponsArgs.prototype, "where", void 0);
UpdateManyCouponsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCouponsArgs);
exports.UpdateManyCouponsArgs = UpdateManyCouponsArgs;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTargetsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TargetsUpdateManyMutationInput_1 = require("../../../inputs/TargetsUpdateManyMutationInput");
const TargetsWhereInput_1 = require("../../../inputs/TargetsWhereInput");
let UpdateManyTargetsArgs = class UpdateManyTargetsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsUpdateManyMutationInput_1.TargetsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TargetsUpdateManyMutationInput_1.TargetsUpdateManyMutationInput)
], UpdateManyTargetsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TargetsWhereInput_1.TargetsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TargetsWhereInput_1.TargetsWhereInput)
], UpdateManyTargetsArgs.prototype, "where", void 0);
UpdateManyTargetsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTargetsArgs);
exports.UpdateManyTargetsArgs = UpdateManyTargetsArgs;

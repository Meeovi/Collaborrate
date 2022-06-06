"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationUpdateManyMutationInput_1 = require("../../../inputs/InternalizationUpdateManyMutationInput");
const InternalizationWhereInput_1 = require("../../../inputs/InternalizationWhereInput");
let UpdateManyInternalizationArgs = class UpdateManyInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationUpdateManyMutationInput_1.InternalizationUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationUpdateManyMutationInput_1.InternalizationUpdateManyMutationInput)
], UpdateManyInternalizationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereInput_1.InternalizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereInput_1.InternalizationWhereInput)
], UpdateManyInternalizationArgs.prototype, "where", void 0);
UpdateManyInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyInternalizationArgs);
exports.UpdateManyInternalizationArgs = UpdateManyInternalizationArgs;

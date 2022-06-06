"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyGlossaryArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GlossaryUpdateManyMutationInput_1 = require("../../../inputs/GlossaryUpdateManyMutationInput");
const GlossaryWhereInput_1 = require("../../../inputs/GlossaryWhereInput");
let UpdateManyGlossaryArgs = class UpdateManyGlossaryArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryUpdateManyMutationInput_1.GlossaryUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", GlossaryUpdateManyMutationInput_1.GlossaryUpdateManyMutationInput)
], UpdateManyGlossaryArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GlossaryWhereInput_1.GlossaryWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", GlossaryWhereInput_1.GlossaryWhereInput)
], UpdateManyGlossaryArgs.prototype, "where", void 0);
UpdateManyGlossaryArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyGlossaryArgs);
exports.UpdateManyGlossaryArgs = UpdateManyGlossaryArgs;

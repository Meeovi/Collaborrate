"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationUpdateInput_1 = require("../../../inputs/InternalizationUpdateInput");
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
let UpdateInternalizationArgs = class UpdateInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationUpdateInput_1.InternalizationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationUpdateInput_1.InternalizationUpdateInput)
], UpdateInternalizationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], UpdateInternalizationArgs.prototype, "where", void 0);
UpdateInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateInternalizationArgs);
exports.UpdateInternalizationArgs = UpdateInternalizationArgs;

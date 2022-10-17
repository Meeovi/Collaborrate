"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationUpdateInput_1 = require("../../../inputs/InternalizationUpdateInput");
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
let UpdateOneInternalizationArgs = class UpdateOneInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationUpdateInput_1.InternalizationUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationUpdateInput_1.InternalizationUpdateInput)
], UpdateOneInternalizationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], UpdateOneInternalizationArgs.prototype, "where", void 0);
UpdateOneInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInternalizationArgs);
exports.UpdateOneInternalizationArgs = UpdateOneInternalizationArgs;

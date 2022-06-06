"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationWhereUniqueInput_1 = require("../../../inputs/InternalizationWhereUniqueInput");
let DeleteInternalizationArgs = class DeleteInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InternalizationWhereUniqueInput_1.InternalizationWhereUniqueInput)
], DeleteInternalizationArgs.prototype, "where", void 0);
DeleteInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteInternalizationArgs);
exports.DeleteInternalizationArgs = DeleteInternalizationArgs;

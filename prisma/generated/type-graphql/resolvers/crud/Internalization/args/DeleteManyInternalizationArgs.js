"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyInternalizationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InternalizationWhereInput_1 = require("../../../inputs/InternalizationWhereInput");
let DeleteManyInternalizationArgs = class DeleteManyInternalizationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InternalizationWhereInput_1.InternalizationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", InternalizationWhereInput_1.InternalizationWhereInput)
], DeleteManyInternalizationArgs.prototype, "where", void 0);
DeleteManyInternalizationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyInternalizationArgs);
exports.DeleteManyInternalizationArgs = DeleteManyInternalizationArgs;

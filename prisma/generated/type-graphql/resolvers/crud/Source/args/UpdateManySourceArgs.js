"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManySourceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SourceUpdateManyMutationInput_1 = require("../../../inputs/SourceUpdateManyMutationInput");
const SourceWhereInput_1 = require("../../../inputs/SourceWhereInput");
let UpdateManySourceArgs = class UpdateManySourceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceUpdateManyMutationInput_1.SourceUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SourceUpdateManyMutationInput_1.SourceUpdateManyMutationInput)
], UpdateManySourceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SourceWhereInput_1.SourceWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SourceWhereInput_1.SourceWhereInput)
], UpdateManySourceArgs.prototype, "where", void 0);
UpdateManySourceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManySourceArgs);
exports.UpdateManySourceArgs = UpdateManySourceArgs;

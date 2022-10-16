"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesUpdateInput_1 = require("../../../inputs/WorkspacesUpdateInput");
const WorkspacesWhereUniqueInput_1 = require("../../../inputs/WorkspacesWhereUniqueInput");
let UpdateOneWorkspacesArgs = class UpdateOneWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesUpdateInput_1.WorkspacesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesUpdateInput_1.WorkspacesUpdateInput)
], UpdateOneWorkspacesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesWhereUniqueInput_1.WorkspacesWhereUniqueInput)
], UpdateOneWorkspacesArgs.prototype, "where", void 0);
UpdateOneWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneWorkspacesArgs);
exports.UpdateOneWorkspacesArgs = UpdateOneWorkspacesArgs;

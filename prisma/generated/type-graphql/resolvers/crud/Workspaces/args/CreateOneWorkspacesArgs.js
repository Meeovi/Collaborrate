"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneWorkspacesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const WorkspacesCreateInput_1 = require("../../../inputs/WorkspacesCreateInput");
let CreateOneWorkspacesArgs = class CreateOneWorkspacesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => WorkspacesCreateInput_1.WorkspacesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", WorkspacesCreateInput_1.WorkspacesCreateInput)
], CreateOneWorkspacesArgs.prototype, "data", void 0);
CreateOneWorkspacesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneWorkspacesArgs);
exports.CreateOneWorkspacesArgs = CreateOneWorkspacesArgs;

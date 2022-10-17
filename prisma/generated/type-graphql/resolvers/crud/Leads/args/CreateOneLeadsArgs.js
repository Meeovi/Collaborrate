"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneLeadsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const LeadsCreateInput_1 = require("../../../inputs/LeadsCreateInput");
let CreateOneLeadsArgs = class CreateOneLeadsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => LeadsCreateInput_1.LeadsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", LeadsCreateInput_1.LeadsCreateInput)
], CreateOneLeadsArgs.prototype, "data", void 0);
CreateOneLeadsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneLeadsArgs);
exports.CreateOneLeadsArgs = CreateOneLeadsArgs;

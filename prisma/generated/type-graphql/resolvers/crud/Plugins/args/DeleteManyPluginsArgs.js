"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPluginsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PluginsWhereInput_1 = require("../../../inputs/PluginsWhereInput");
let DeleteManyPluginsArgs = class DeleteManyPluginsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PluginsWhereInput_1.PluginsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PluginsWhereInput_1.PluginsWhereInput)
], DeleteManyPluginsArgs.prototype, "where", void 0);
DeleteManyPluginsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyPluginsArgs);
exports.DeleteManyPluginsArgs = DeleteManyPluginsArgs;

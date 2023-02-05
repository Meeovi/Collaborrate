"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyPluginsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyPluginsArgs_1 = require("./args/CreateManyPluginsArgs");
const Plugins_1 = require("../../../models/Plugins");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyPluginsResolver = class CreateManyPluginsResolver {
    async createManyPlugins(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).plugins.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyPluginsArgs_1.CreateManyPluginsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyPluginsResolver.prototype, "createManyPlugins", null);
CreateManyPluginsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Plugins_1.Plugins)
], CreateManyPluginsResolver);
exports.CreateManyPluginsResolver = CreateManyPluginsResolver;
